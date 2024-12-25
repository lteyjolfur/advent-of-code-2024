using System;
using System.IO;
using System.Linq;


Console.WriteLine("Hello, World!");
int count = 0;
string input = File.ReadAllText("./input.txt");
for (int i = 0; i < input.Length; i++)
{
    char c = input[i];

    if (c == '(')
    {
        count++;
    }
    else if (c == ')')
    {
        count--;
    }
    if (count == -1)
    {
        Console.WriteLine("2: " + i + 1);
    }
}

Console.WriteLine("1: " + count);
Console.WriteLine("1: " + count);
