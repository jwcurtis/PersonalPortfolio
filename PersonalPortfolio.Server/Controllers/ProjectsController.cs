using Microsoft.AspNetCore.Mvc;

namespace PersonalPortfolio.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectsController : ControllerBase
    {

        [HttpGet(Name = "Projects")]

        public IEnumerable<Projects> Get()
        {
            return Enumerable.Range(1, 15).Select(index => new Projects
            {
                projectId = index,
                projectName = "Name",
                projectType = "Filler",
                projectDescription = $"This is a description for project {index}.",
                projectLink = $"https://google.com",
                dateCompleted = DateOnly.FromDateTime(DateTime.Now.AddDays(-index * 30)),
                lastUpdated = DateOnly.FromDateTime(DateTime.Now.AddDays(-index * 15))
            })
            .ToArray();
        }
    }
}
