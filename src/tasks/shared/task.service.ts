import { Injectable } from '@nestjs/common';
import { Task } from './task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getAll() {
    return await this.taskModel.find().exec();
  }

  async getById(id: string) {
    return await this.taskModel.findById(id).exec();
  }

  async create(task: Task) {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }

  async update(id: string, task: Task) {
    return await this.taskModel
      .findByIdAndUpdate(id, task, { new: true })
      .exec();
  }

  async delete(id: string) {
    return await this.taskModel.findByIdAndRemove(id).exec();
  }
}
