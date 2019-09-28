<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Task;
use App\TaskManager\TaskManager;
use App\Core\Utilities\GroupTrait;
use App\Core\Repositories\TaskRepository;
use App\Core\Http\Requests\UpdateTaskRequest;

class TaskController extends Controller
{
    use GroupTrait;

    public function store()
    {
        try {
            $this->authorize('create', Task::class);
            $task = TaskManager::createTask(request());

            return response()->json([
                'status'  => 'success',
                'message' => localize('misc.New task has been created'),
                'task'    => $task,
            ], 201);
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'error',
                'message' => $exception->getMessage(),
            ]);
        }
    }

    public function show(Task $task)
    {
        $this->authorize('view', $task);
        $task->load('user');

        return response()->json([
            'status' => 'success',
            'task'   => $task,
        ]);
    }

    public function index(TaskRepository $repository)
    {
        try {
            $group = $this->getGroupModel();
            if ($group->notOpenForPublic()) {
                abort(401);
            } elseif (auth()->user()) {
                $this->authorize('view', $group);
            }
            $tasks = $repository->getAllTaskWithAssignee(request('resource_type'), request('resource_id'));

            return response()->json([
                'status'   => 'success',
                'total'    => count($tasks),
                'tasks'    => $tasks,
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status'   => 'error',
                'message'  => 'Something went wrong',
            ]);
        }
    }

    public function delete(Task $task)
    {
        $this->authorize('delete', $task);
        $task->delete();

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.The task has been deleted'),
        ]);
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $this->authorize('update', $task);
        $task->update($request->all());
        $task->tags()->attach(request('labels'));
        $task->load('user:id,avatar', 'status', 'tags');

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.Task has been updated'),
            'task'    => $task,
        ]);
    }
}
