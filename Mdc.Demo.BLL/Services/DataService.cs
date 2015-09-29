using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Threading.Tasks;
using Mdc.Demo.BLL.Interfaces;

namespace Mdc.Demo.BLL.Services
{
    public class DataService : IDataService
    {
        private static Dictionary<int, Models.Task> _tasks;
        private Dictionary<int, Models.Task> Tasks
        {
            get
            {
                if (_tasks == null)
                {
                    _tasks = new Dictionary<int, Models.Task>();
                    _tasks.Add(0, new Models.Task { Id = 0, Complete = true, Description = "Don't Panic" });
                    _tasks.Add(1, new Models.Task { Id = 1, Complete = false, Description = "Give Presentaion" });
                    _tasks.Add(2, new Models.Task { Id = 2, Complete = false, Description = "Relax" });
                }
                return _tasks;
            }
            set
            {
                _tasks = value;
            }
        }


        public DataService()
        {
            //if (_tasks == null)
            //{
            //    _tasks = new Dictionary<int, Models.Task>();
            //    _tasks.Add(0, new Models.Task { Id = 0, Complete = true, Description = "Don't Panic" });
            //    _tasks.Add(1, new Models.Task { Id = 1, Complete = false, Description = "Give Presentaion" });
            //    _tasks.Add(2, new Models.Task { Id = 2, Complete = false, Description = "Relax" });
            //}
        }

        public Models.Task AddNewTask(Models.Task task)
        {
            task.Id = Tasks.Count > 0 ? Tasks.Keys.Max() + 1 : 0;
            Tasks.Add(task.Id, task);

            return task;
        }

        public IEnumerable<Models.Task> GetAllTasks()
        {
            return Tasks.Values;
        }

        public Models.Task UpdateTask(Models.Task task)
        {
            Tasks[task.Id] = task;
            return task;
        }

        public void DeleteTask(int id)
        {
            Tasks.Remove(id);
        }

        public Models.Task GetTask(int id)
        {
            return Tasks[id];
        }
    }
}
