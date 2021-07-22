using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CalcAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace CalcAPI.Data
{
    public class DefaultContext : DbContext
    {
        public DefaultContext(DbContextOptions<DefaultContext> options) : base(options)
        {
            
        }

        public DbSet<Calculation> Calculations { get; set; }
        
    }
}
