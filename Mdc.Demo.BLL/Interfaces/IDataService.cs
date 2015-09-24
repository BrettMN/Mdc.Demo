using Mdc.Demo.BLL.Models;
using System.Collections.Generic;

namespace Mdc.Demo.BLL.Interfaces
{
    public interface IDataService
    {
        Task AddNewTask(Task task);
        IEnumerable<Task> GetAllTasks();
        Task UpdateTask(Task task);
        void DeleteTask(int id);
        Task GetTask(int id);
    }
}