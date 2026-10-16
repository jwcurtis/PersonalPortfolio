using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PersonalPortfolio.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddResumeExp2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ResumeExperiences",
                table: "ResumeExperiences");

            migrationBuilder.RenameTable(
                name: "ResumeExperiences",
                newName: "ResumeExperience");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ResumeExperience",
                table: "ResumeExperience",
                column: "JobId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ResumeExperience",
                table: "ResumeExperience");

            migrationBuilder.RenameTable(
                name: "ResumeExperience",
                newName: "ResumeExperiences");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ResumeExperiences",
                table: "ResumeExperiences",
                column: "JobId");
        }
    }
}
