using System;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Numerics;
using System.Xml.Serialization;

string[] testStrings = [">", "^v", "^>v<", "^v^v^v^v^"];

string input = File.ReadAllText("./input.txt");
string[] rows = input.Split('\n');






long visit(long[] s)
{
    //Console.WriteLine(string.Join(",", s));
    return s[0] * 100000 + s[1];
}

long distribute(string[] paths)
{
    long total = 0;
    foreach (string path in paths)
    {

        long[] santaPos = [0, 0];
        var visited = new HashSet<long> { visit(santaPos) };
        foreach (char dir in path)
        {

            switch (dir)
            {
                case '^':
                    santaPos[1] -= 1;
                    visited.Add(visit(santaPos));
                    break;
                case 'v':
                    santaPos[1] += 1;
                    visited.Add(visit(santaPos));
                    break;
                case '<':
                    santaPos[0] -= 1;
                    visited.Add(visit(santaPos));
                    break;
                case '>':
                    santaPos[0] += 1;
                    visited.Add(visit(santaPos));
                    break;
            }
        }
        //Console.WriteLine(visited.Count);
        //Console.WriteLine(string.Join(",", visited));
        total += visited.Count;
    }
    return total;
}

long roboDistribute(string[] paths)
{
    long total = 0;
    foreach (string path in paths)
    {

        long[][] santaPos = [[0, 0], [0, 0]];
        long i = 0;
        var visited = new HashSet<long> { visit(santaPos[i]) };
        foreach (char dir in path)
        {

            switch (dir)
            {
                case '^':
                    santaPos[i][1] -= 1;
                    visited.Add(visit(santaPos[i]));
                    break;
                case 'v':
                    santaPos[i][1] += 1;
                    visited.Add(visit(santaPos[i]));
                    break;
                case '<':
                    santaPos[i][0] -= 1;
                    visited.Add(visit(santaPos[i]));
                    break;
                case '>':
                    santaPos[i][0] += 1;
                    visited.Add(visit(santaPos[i]));
                    break;
            }
            i++;
            i %= 2;
        }
        //Console.WriteLine(visited.Count);
        //Console.WriteLine(string.Join(",", visited));
        total += visited.Count;
    }
    return total;
}

Console.WriteLine(distribute(testStrings));
Console.WriteLine("1: " + distribute(rows));
Console.WriteLine(roboDistribute(testStrings));
Console.WriteLine("2: " + roboDistribute(rows));

