using Microsoft.EntityFrameworkCore.Migrations;

namespace UserManagement.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FreshersDetails",
                columns: table => new
                {
                    FresherId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    SecondName = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    EmailId = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(250)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    Active = table.Column<string>(type: "nvarchar(10)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FreshersDetails", x => x.FresherId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FreshersDetails");
        }
    }
}
