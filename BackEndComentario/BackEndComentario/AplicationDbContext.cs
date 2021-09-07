using BackEndComentario.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndComentario
{
    public class AplicationDbContext : DbContext
    {
        public DbSet<comentario> comentarios { get; set; }

        public AplicationDbContext( DbContextOptions<AplicationDbContext> options) : base(options)
        {

        }
    }
}
