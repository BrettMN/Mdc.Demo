using Mdc.Demo.BLL.Interfaces;
using Mdc.Demo.BLL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Mdc.Demo.Controllers
{
    public class TasksController : ApiController
    {
        IDataService _service;

        public TasksController(IDataService service)
        {
            _service = service;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Task> Get()
        {
            return _service.GetAllTasks();
        }

        // GET api/values/5
        [HttpGet]
        public BLL.Models.Task Get(int id)
        {
            return _service.GetTask(id);
        }

        // POST api/values
        [HttpPost]
        public BLL.Models.Task Post([FromBody]BLL.Models.Task task)
        {
            return _service.AddNewTask(task);
        }

        // PUT api/values/5
        [HttpPut]
        public BLL.Models.Task Put(int id, [FromBody]BLL.Models.Task task)
        {
            return _service.UpdateTask(task);
        }

        // DELETE api/values/5
        [HttpDelete]
        public int Delete(int id)
        {
            _service.DeleteTask(id);
            return id;
        }
    }
}
