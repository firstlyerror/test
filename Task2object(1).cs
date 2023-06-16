using System;

namespace ilkin
{
    class Program
    {
        
        static void Main(string[] args)
{
            Milk m1 = new Milk();
            m1.fatpercent = 2;
            Milk m2 = new Milk();
            m2.fatpercent = 3;
            Milk m3 = new Milk();
            m3.fatpercent = 7;
            int sum;
            int say;
            int result;
            int[] milkarray = { m1.fatpercent, m2.fatpercent, m3.fatpercent };
            sum = m1.fatpercent+m2.fatpercent+m3.fatpercent;
            say = milkarray.Length - 1;
            result = sum / say;
            Console.WriteLine(result);
            


          

        }   } }

