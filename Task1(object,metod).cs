using System;

namespace ilkin
{
    class Program
    {
        private const double V = 0.7;
        private static  Car car = new Car();
        private static object km;

        static void Main(string[] args)
{

            Car c1 = new Car();
            c1.Brand = "Mercedes";
            c1.Model = "c class";
            c1.CurrentFuel = 60;//litr
            c1.FuelFor1Km = 1 ;//litr
            c1.Millage = 1000;//km

            void carmetod()
            {
                
                int a= int.Parse(Console.ReadLine());
                if (c1.CurrentFuel > a)
                {
                    c1.Millage = c1.Millage + a;
                    c1.CurrentFuel = c1.CurrentFuel - a;
                    Console.WriteLine(c1.CurrentFuel);
                    Console.WriteLine(c1.Millage);
                    

                }
                else
                {
                    Console.WriteLine("xeta");
                }

            }
            carmetod();

        }
         }
 }

