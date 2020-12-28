using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserManagement.Models
{
    public class FreshersDetailContext:DbContext 
    {
        public FreshersDetailContext(DbContextOptions<FreshersDetailContext>options):base(options)
        {

        }
        public DbSet<FreshersDetail> FreshersDetails { get; set; }
    }
}
