using BackEndComentario.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackEndComentario.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ComentarioController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public ComentarioController(AplicationDbContext context)
        {
            _context = context;
        }
            // GET: api/<ComentarioController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listCOMENTARIOS = await _context.comentarios.ToListAsync();
                return Ok(listCOMENTARIOS);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<ComentarioController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var listcoemntario = await _context.comentarios.FindAsync(id);

                if(listcoemntario == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(listcoemntario);
                }

            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<ComentarioController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] comentario comentario)
        {
            try
            {
                 await _context.AddAsync(comentario);
                 await _context.SaveChangesAsync();
                return Ok(comentario);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<ComentarioController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] comentario comentario)
        {
            try
            {
                if (id != comentario.Id)
                {
                    return BadRequest();
                }
                else
                {
                    _context.Update(comentario);
                    await _context.SaveChangesAsync();
                    return Ok(new {message = "Comentario actualizado con exito!"});
                }

            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<ComentarioController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var comentario = await _context.comentarios.FindAsync(id);
                if (comentario == null)
                {
                    return NotFound();
                }
                else
                {
                     _context.comentarios.Remove(comentario);
                    await _context.SaveChangesAsync();
                    return Ok(new { message = "Eliminado correctamente" });
                }           
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
