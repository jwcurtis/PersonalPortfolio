using Microsoft.EntityFrameworkCore;
using PersonalPortfolio.Server.Models;

namespace PersonalPortfolio.Server.Data
{
    public class PortfolioContext : DbContext
    {
        public PortfolioContext(
            DbContextOptions<PortfolioContext> options)
            : base(options)
        {
        }

        public DbSet<Project> Projects => Set<Project>();
        public DbSet<LanguageFramework> LanguageFrameworks => Set<LanguageFramework>();
        public DbSet<ResumeExperience> ResumeExperience => Set<ResumeExperience>();
        public DbSet<Contacts> Contacts => Set<Contacts>();
        public DbSet<Education> Education => Set<Education>();
        public DbSet<Technical> Technicals => Set<Technical>();
    }
}