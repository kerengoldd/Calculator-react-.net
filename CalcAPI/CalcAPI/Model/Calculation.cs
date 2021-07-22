using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalcAPI.Model
{
    public class Calculation
    {
        public int Id { get; set; }
        public string Values { get; set; }
        public float Total { get; set; }
    }
}
