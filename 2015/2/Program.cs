using System;
using System.Globalization;
using System.IO;
using System.Linq;


string input = File.ReadAllText("./input.txt");
string[] rows = input.Split('\n');
long[][] present = rows.Select(row => row.Split('x').Select(c => long.Parse(c)).ToArray()).ToArray();


static long[] wrapPresent(long l, long w, long h)
{
    long[] sides = [l * w, w * h, h * l];
    long[] perimeters = [2 * l + 2 * w, 2 * l + 2 * h, 2 * w + 2 * h];
    long smallest = sides.Min();
    long a = 2 * l * w;
    long b = 2 * w * h;
    long c = 2 * h * l;
    long d = sides.Min();
    long perimeter = perimeters.Min();
    long vol = l * w * h;
    long ribbon = perimeter + vol;
    return [a + b + c + d, ribbon];
}



static long[] wrapPresents(long[][] presents)
{
    long[] total = [0, 0];
    foreach (long[] present in presents)
    {
        long[] result = wrapPresent(present[0], present[1], present[2]);
        total[0] += result[0];
        total[1] += result[1];
    }
    return total;
}

Console.WriteLine(wrapPresent(2, 3, 4)[0]);
Console.WriteLine(wrapPresent(2, 3, 4)[1]);

Console.WriteLine(wrapPresent(1, 1, 10)[0]);
Console.WriteLine(wrapPresent(1, 1, 10)[1]);

long[] res = wrapPresents(present);
Console.WriteLine("1: " + res[0]);
Console.WriteLine("2: " + res[1]);

