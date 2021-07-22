using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CalcAPI.Data;
using CalcAPI.Model;

namespace CalcAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly DefaultContext _context;

        public CalculatorController(DefaultContext context)
        {
            _context = context;
        }


       
        //Get all calculation for story...
        // GET: api/Calculator
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Calculation>>> GetCalculations()
        {
            return await _context.Calculations.ToListAsync();
        }


        //get calculation details for edit..
        // GET: api/Calculator/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Calculation>> GetCalculation(int id)
        {
            var calculation = await _context.Calculations.FindAsync(id);

            if (calculation == null)
            {
                return NotFound();
            }

            return calculation;
        }

        //this if for update calculation
        // PUT: api/Calculator/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCalculation(int id, Calculation calculation)
        {
            if (id != calculation.Id)
            {
                return BadRequest();
            }

            string result = new DataTable().Compute(calculation.Values, null).ToString();
            calculation.Total = float.Parse(result);

            _context.Entry(calculation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CalculationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(result);
        }

        //to add new calculation
        // POST: api/Calculator
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Calculation>> PostCalculation(Calculation calculation)
        {
            string result = new DataTable().Compute(calculation.Values, null).ToString();
            calculation.Total = float.Parse(result);

            _context.Calculations.Add(calculation);
            await _context.SaveChangesAsync();

            return Ok(result);
        }

        
        // DELETE: api/Calculator/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCalculation(int id)
        {
            var calculation = await _context.Calculations.FindAsync(id);
            if (calculation == null)
            {
                return NotFound();
            }

            _context.Calculations.Remove(calculation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CalculationExists(int id)
        {
            return _context.Calculations.Any(e => e.Id == id);
        }
    }
}
