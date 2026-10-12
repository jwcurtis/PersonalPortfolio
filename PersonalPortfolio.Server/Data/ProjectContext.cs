using Microsoft.EntityFrameworkCore;
using PersonalPortfolio.Server.Models;

namespace PersonalPortfolio.Server.Data
{
    public class ProjectContext : DbContext
    {
        public ProjectContext(
            DbContextOptions<ProjectContext> options)
            : base(options)
        {
        }

        public DbSet<Project> Projects => Set<Project>();
    }
}