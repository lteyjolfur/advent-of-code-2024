import readline from 'readline';
import chalk from 'chalk';

const input = `##################################################
#.#...........O.O....#..O.#O.O#.O....OOO.O...O...#
#.#O......O...O..#...........#...#.....#...##....#
#O.OO..O.OO.O..OO.....O...#...O...#O.O.#..O...##.#
#...OOO..#..OO.....O.O.#OO#.OO#....O.......#..OO##
#.O......OO.O.O...OOO.O#......##..O.O..O......O###
##.......#.O.OO..O.....O....#..........O..O.O...O#
#.....OO..##.O.#...#....#......OO.....O.O...O....#
#OO.OOO...#..#O.....O#O...O.#...........O..#..##O#
#OO##......O.O.#OO.O.OO..#O.O.O.O.O.O.....O.OOO.O#
#O.....#OOO...O.O...#.#O....#......OOO...O.OO....#
#O.O...O.........#..##..O..#.O...O...O..O.OO..#.O#
#.......O..O#....OO.O.O#...O..O.#O..O.O#.....OO..#
#OO.O#O...O#..#...#O.#....O#O..#.O..O#...O..##..O#
#O......O.#..O.......O.O.OO..O#.......O..O#..#..O#
#....O...OO...O.O..##....O.#..O.O..O..O....OOOO..#
#.....O.O.O..O.O.O.O.O.OO....O..OO..O.O...O.O#..O#
#O......OO.O......#O.O.OO#......O....OO..O...O..O#
#O......OO..O....O...O.....OOO.O....OO.O..O#...OO#
#..OOOOOO.O..OO..O...O.....#......OO.#.O...#O.O.O#
#...O..#O..O.OO.......O...##OO.#.........#O.#...O#
#...OO.#O..OO....##....#...OO..#...O.O..O...O..OO#
##...O.#..#O.#OO......O..OO.O#..O.....O.#..O.OOOO#
##.....#......O.OO#O.O..O....O..O.OOO.O..O...O.#O#
#........O.O..OO..O.....@....#..O...OOOO#.O......#
#O....O....O...OO.OOO...O.OO.....OO#..O......O.O.#
#...O..O...O.OOOO.....#...O.O....O##O.....O.#...O#
#...O.....O...#.......O.OO..O..#.#OO.OO........#.#
##.O........#.......#O#.............O...O#..#.O#.#
#O.....O.OOOO.....O.O...OO.O...O.O...OO..O...O.O.#
#...........O...OOOOOO....O.O.#.OO...O.O..OO.....#
#..O##.......OO.OO.##..#..O...#.O..O#O...O.O#..O.#
#...OO...OO.O.......#.....OOO.O..O..O.....O...O..#
#..OO.......OO.....#......OO.O..O..#....OO....O..#
#...OO..OO...O.OO.O#.O...#.O..........OOO...OO..##
#..#O..O#....O....#....O.#...OO.O.#...#.........O#
#O.......O..OO...O.O.O...OO#O.#..O.#O..#..O.#O..O#
#..O..O...#OO...O..O.#OO.O.O...O.......##..O#..#.#
#.O..#....O..O.O..O..O.O..#....O..#...O.OO#.O....#
##OOO.O.O.................O.O..##OO.O.O.O.OO.O.O.#
#..O..................OO...O....OOO#...O....O.#..#
#..#.O#..#...OO....#....OO......#......O..OO..O.O#
#.O..OO...OO.#.OO..OOOOO#.O.OO...O.O.#...O..#.OO.#
#...O..#O#...#..............OO.#.#.....OO.......O#
#.O#.....O#..OO.#..O......#..#O.O#.O.OO........O.#
#OO.O#...O#.O......OO......O...........##.O..#...#
#..O#...O.#...O.O...O...OO.O#OOO..OO#..O..OOOO.O.#
#...O.O#..OO........O#.OO.....#O.O.O#......#O.O#.#
#........O....O....O#..#.....O..O..OO#.OOO....O..#
##################################################

^v<v^^^vv><<><><<^><><>vv><<v^^<<>^^v><>v><^^^vvv^^><<^v^>^^<>><v<vv>v>v<^<^^>v^v<v^>>^vv^v><>>v<v>v>^^><>^>v<vv><^^><>^^^^<<<v^>v>^<vv<<>>v><v^vvv>v^v>^<>^v^vv^<^^<<<vv^<^<^v><<<^v<vvv^v^><>>v^vv^^>^^^^><<<^^^v<^^v>^^vv<>><<>v>v<^^v>v^^<<vv>^>^^<<>^<vv<^v^<^^^>>^<<<^vv^<v>>>v<><>^^><^>><v<<<>^^^vv^v<>v^v<^v^vv<<vv><v>^<^<<>v<^<<><^<>><^<>^v^><<^<<^>><>>><^vv<>vv<^>v><>vvvvv<><>>v>>^vvv^v<><<^><>^<v^><<>>vv<<>>>>v<<>v<><vv>vv>^v<v^<<<v<^>>>^v^<^<<<v<v^v>>v<>^<vv>>^^>^vv>v^^>^vvv<^^vv^^<v^>^>vv<^<v<>^><v>vv<<v>^^<<>v^vvv^<^><^<>^>^^^<<><v>^vv<<><>^^<><^vv<v^<>>^^^>^<<^^<><<<^^v><>^<^<v>v>>^>^^v<>^v^<^v^^v>>v<^>>><v^v^^>>>vv^<v^^>v>^>><v>v^><^<vv<<<<v^^^<>v>^v<^^<><^v>><v>^>>>^v^^<<^^^>v>v^^v^>>^<v^vvv>^<^v<v<<^<<v<>v<^>vv^<v><^<v^<>>v<>v<<<<^<v<>v^^<>^^>^>vv<>^v>^<v>v<<>^><^v<<>>^vv<>v>>^>>^>v>^>^v>v^>^><<><^<<^<>^v>v<^>v^v^>v^><>>><^<v^><>><vv^<<<>v<>vv><^<v<>v<<v^^<<>^>v>^^>^>v^><^><<vv^>^<^vvvvv^v^v^^<<^vv>^vv^<^v><<v>v>v><<^v^^^<>^>^<^vvv^>vv^<>>>^^v^>v>vv<>>>>>v>^<>v><^<<^<v<^<vv^<
vvv<>^>>v>^^vv^vv^<v>>>^^>><<>^<>^<<<><^<<^>vv<v^v>v^>v^<>>^<>v<<>>^>>^^>vv^vvvvvv<<vvvv><<v^^v<<vv><<v^vv<v<>^>^<^^vv><v^^^^v>^>>^>v<^>^>^v<^^^<>><v<><<vvv><<v^v><>vv>>v>>>>v^^>^vv<v>vv>^>><>vv^>v<v>^v<<><>>><><><>><^^^<<>>^^^>^^<>>v^<><<^v<v<<vvvv^^<<^^^>v><v><>v<^vv>>>^<<v>v><^^<v^^>vv>^><>>v<^^^^<^>^^v^<^v<^><^^<>^<^^^vv>>>>>vv^^^v^>^^<^^<v^^^^>^>^v>><>vvv>^v>^^v<<>vv>^^>>vv>>^>>v<v^v>v^^>^^vv<>^>vv^^>^v^>>>v<^>^v^v<v^>v>><>>^<^vvv^<vv^<>^>^>^<vvv>^><>v><>^v^><>v>vv<v^><^v>^vv^<v^<<<<^^^>v><>v^^<v<^v^<^^vvv<>^^^>>^v>vvvvv^>>vv^v^v^^^>^v^^^>v>v>v>v<^<<v<^^><<<^<vv<>>^v<v><^>^^^^>>v^><>>>^>>^vv<v>><^>v^^^<>^>>v><<>>^^<<<<v^<^v<>^v<<>^<^>>>><v<v<^v><>v^vv<<<>>>^><<v<>v^^v^>^^>>v^vvv>>>v^^vv>v<^<<v^<>><>^v<<<>v^><<><<>>>^v^v^^>^vvv<vv<vv<vv<<vv>>^<>^v><>vv<vvv>v^v<<<<v^^vv<v<v^v>^^<vv^v<><^v>v<<>vv^vv<v>vvv>vvv>><^^^v^v^><^v<^<>^>^v^<^<v<v<v>>^>^vv>vv<<><<>^<><<v>><<>v>^<v>><^^v<>><>v^>v<^^^^>^vv>^^v>>vvv>v<^v<v>>>><>^<<<<v<v^v^<>v<<^>>>v<<v^<>>v<<<^v^><^<><><>>^^<<^>^<v>>vv>>v^<v<v>^<
>v>><><>v<>v>^>><v^^^v>>>vv<^>^vv<<><>^v>^<>>>^^^^v>><v^v^<><>^^v<<vvvv<<^<^<^^<>v<v^><><<^vv>v^^><<<<>^><^<^^>vv^v><vv<vv<>>^>^><^<<^<^^><^v<^<<v^><v><>^^v><^^<<^<^v<vv>v^<><vv^^><>^<<><>^>v>vv<v>^>v>^<>vv>>v>^<>vv^<v^>>>>^<v^vv^v^vv^^<^^^<<<v^^^>v<vv<<^><^vv^>vvv^v^vv<^<>vv>^>>>>^<><vv><^>v<<v><<>>vv>>^^v<>v^v>v><<v^><v><>vvvv>vv<<>^<vvvv<^^>^^><v^<><^<><<<>^^>^>^vv^^^vv>^>>vv<>^v<^<<><vv>^>>>^<^v^<<v<v<>><<^vvv^<<^v><^vv^v><vvv^>v<><v><v<^v>^v^>>>v<^^<>^^>^>vvv>>^<v^^^v<<>^><>>>v^^v>^v^v><vv^<<>^>^>^>^<<^^^>v>^<^><<<>^v><<>vvv>^>>v<^<vv^><vv><^<>v^<<><v<^><^<><^><^^v<v^><<>^>^v<^^>v^^v^>>v<^^<v>v<vvv>>^^v^><^>^>>v^^^>^<v^>vv>vvvv>v>v>><^^>><v<^^>vv<^v><v<^><v^v<<v^^^>>>v<v<^v>vv^<^vv><>>>>^v<^><>v<vv>>v^>^>>>v>v^<>v^^>^>^<v<^v^v<vv>>><vv<^><><^>v^^v<v>><>^v^^v<><>>^v>v^^^v^<^<>^v^v^>>vvv>vv^^>>^^<<v<^v>><>^>>vv<vv^<>>>><^v^>>^v^<>^>>^>v<<<<^^v<<^^>>v<^v^<<<vv>v<vv^<v^<v>v>v><vv^<><^^<>>^^^v^v^v><>^<><^<>^><<v>v<^v>v>^><>><><>v><>>v<^<<><><^v><v^v^<^<v>>^<^>>^^vv>>><^>^^^<>^<<^>^><^<
><v<>v<<v<vvv<><<v<><vv^v^^v<<v^<<><<v>v<vv^>^<>^v^>v<^>v>><v>>vv^>>vv><^^v<<^v<v^>vv^v>><vv<<<v<vvv><^>^><v<>><^^>v^^^^^v^<^>v>^v<<>^v<><v<v><^<^^<v><^<v^<<v<<v<><>v^>>^<<^v^vv^^^>v<^^><>^^>^<<<vv<<><<^v><^>^^<v^>^<<>v<v<<><>><<^v^<v<>v>^>><>>vv<^<<^^v^^<^vv>^v<^^^v^<^>><<v>^<v^^^^>v<v<>^>>v<>v^^^>^^><<<<v>^<>^v^v><v>v><>^^<<v^<><v<><<vv>v<^<^><<v<<>>^>v>vv<><>^v><>^^^<^>v><<<^v^<<><vv>v^<^><><^<^^>^^<<>^<<v^^v<v><<<^<<<^^vv<><^^^<<^^^><^<<<>>><><<^^>v<vvv>><^v<vv^<><>^<>>^>v>v>^<^<v^>^v<vvv<vv>>v^v^v>v>^^^^<<>^vv^v><^<>^v>v>>>v<v>v>vv<>v<v<<v>^<<^<><<<v^v>^><>>>vvv<^<<^^<v>^vv^>^^^v>>>^v>v>^>^>v>vv><<>>>>v^v^>^^>^><v>v>>v>>^>^^v<<<v<<v^^<>^>v^v^>^v>>v>>v>v><<>>><>v^v>^<>v>>^<><^^<><<<>>^^^^^v<<>>^<>^>v<><v>>>>^<v^v>^^>v^>>>^v<>v<^^^<v>^^v^>vv^>><>^^>v>v^v<v><><v<^^<^>^^<^^<><><^<>>><v^<<<>><^^vv^>vv^vvv>vvvv^^v<v<><v^^>>>><^>^<v^^><v<<v^>><^<^>v><^><^^<<><<<v^>v>^v^<v<>>^<^v<<<^v^^<^<v^<^v<^<vvvv<<vv<^<><><v>>>v<v><^<vv^v<><^<>v<><^><v^^<<v^>><<>><v^^v^>^^>>^>>v^>><vv<^v^^<>><v<>>>>v
<>>>>>><<<<^^vv<v^>>^v^<^>><><<v>v<>^<^<^>v^^<^<v^^^^>v<^v<>>vv^><<v<<v><^><<<<v^<^vv>v>v<<vvvv>v^^^<v>>><>^vv^>vv><<>>vvv^<>v<v>v>>><<>>v>v^v<v^^<^v^<<>>^v^>^<^^<^<^<^vv>v><>vvv^<>vv>>>^<<>><<^<<v>vvv^>>v^^>><vv>>^^v>v>>v^^v><^^v^^^v<^>v><^v<v^vv^<<v<<<<>vvvv^<^v^^>>^<^^<<^>^v<>^><<>>^v>>>v^v>^^<v<><>^vvv<>>^^^v^<>>^><>v^<v<><<^v^<v<^<v^<<>^<^<^<vv^v<^vvv<<>^^<><>v^^>v<vvv<<^>^><<><vvv<vv>v^<^v<><v<<^<^vv>v<v<<v^><>vv^^<>>^>^<^>>^<vvv^<vv^^^v>>>^^><>>vv<><v>vv^v>>vv<<>^<>vv<^^v<><vvv^<>v><^^vv>vv^^<>><^<<^vv<v<^^>><^><^v^v><v<^vv>>^^v<v<<vv>>>^v<<vv>^^^^^<>^<<^v>vvv>^v<^<v^>vvvv<<><^^<v>>>>v^^v>v>^v<><v<>v^>v^v>vv^><>^^^<^<<>v<>^<vvv^vv>v<^<<><^^v<v>^<>v<v^<v<><>v>^v<^v<vv>><>>^v<v<>^v^<vv^>^vvvv^<>^>^v>v^^^^>^v>vv<v^v^^^vv^^<>v>v^>vv^v>^<^<^<vv>^>^v<><><^>^><^v<^^<>>^^<<<v>><>^<<><<^vvv<v>v>^><>^>^v<>^^><^<>v>^><v<<>^v^<^>>vv>>^^^v^<<<^v^><>v>>>^<vvv>>^<^>^<^v<^>^vv>v^^>^>><><>>><<v<^<>>vv^><><v<<v>><>>>>v><vv>v>v>^<vvv>v<^><v<>v>^<v^><<^^>><v<^>v^^>>>>>^v>v>><<<^^vv^<<>v^<>>><v><^<v
<^<<v^<^v^>^v^>^<>v^v>vv<>v^^<vv>vv>v>^v^^<v<>^v^^><<><<^<<>^vvv<<v^v^<><^^<^<<><^<^>^<><>><v^<vv<v^^<v^>v^v^v<>>v<vv>v<>><>^<<^v^><>^v<^<<<vvv<>>v^^<<<<v<^>^v>^^vv<<v<>^<v>><v<^^v>vv^>vv><>^>v>><<<v><<>>>>>v^vvv<^^^<<<><<^^<>^>^v<>>^^>v>v<v^^^><v<<^<^v>^<<>>^v^>>v>>><>^>v^^<<<v<>^^>vv<<v>v<^<>^<>>^v^>vv>^^v>^vvv>v<<v<^^v^><>>v<^>v^v^<>><<><<>><^>>v^^vvv^v>>^<>vv^>><vv^>^v<<^^vv><^<<<<^^><>^><v^<>^v<<^<^v>>>^v<v>>><v<>v<<^v^<<^v><vvv>^^<^^><vv^v^<v>v<><>^<v<<<^v>>vv^^<<>>v^>>^<>v>^v^^<^^<<>v^>^v^>vvv><>^>>v^<<v<>^^><<vv<><^<<>v>v<^^vv<v>^^<^^<^<v>v^v^v<>v^><<^<^^^v<<^<^^>><<^^^v^vvvv>v<>v<<<>^v>^<^^v><v^<><v<^<^v>^<v>><<<<>^vvv^^v^>v^v<<^^<v>v^^vv^<^^^v>^vv<vvv<<<>^<^>>^<v<>^^v^^<><^<vvv>^v^^v>>>^^><^><<vv<^<>^><>v><<>>^<>^><v<>vv><<v^vv^<^<v>^v^^v^>^<<>v<^>v<vv^^v^>>^>v>v>>>vv>v<vv<vvv^^<>v>^v^^^<v<v<>>>vv^v^>^v<v^><vv>vvvv<>v<^><^<<<v^>vv<v<<<>>v>vv^<<v^><^>v^^^vv>v><>vv^^v>^>>vv>v^^^v>vvv^^<<<v^v<^<^^>^<<v<v^>^^<^>^<<>vv^v^v<>^<^^><vv^v>^>>v><^v^<vv>v^<v^^v^<<<<<<v^v><^>>>>v<^><><>^
v<v^^>v<>><<v>>^>vv>>v<<^^v^v><<<v<>vv<>>><v>^^^vvv><>^v><>^<vvv^^<<>>^<>^^<v<v^>^><^>^><>>^^<>><><<^v><v^><v>v^<<^v^>v^^>>^vv^^<v^v>v^^>v^^v><v<v<v>>^<v>v<<<>v>><vv^v<^>>vv>^^>><<^>vv<v>v^<<<<>vv<<>^<v><<^<<>>v>^>>^>^vv^<v>^^><<<vv<<><><<<<^^^>>^^^v><>>v^v><vv<>v<v^^>^^>v^v><<>>>>^<>v><^v<v^>^v^v<>v<^^^<^>^<^><>v<v^<^vvv<><^<>vvvv^v<v<^v<^^^>^vv^^v>><<<v<>v><vv^^v>v<^^v><^<>^>v^>^v^^^>>v<^<<<v<>><^^vv<<v^<vv><>>^v<^<^<<^vv<v<^<v<>>^<v<^<>^>v>>><>^>v^v^v><>^vvvv<v>^>vv>>>^<><^<^<v<^^^<v^v><>^<>v>>>vv<<^<<^<v>v>>vvvv><^^v>^v>^><<>vv>^><<>>>^^^v>^^<><v<^<v^<^>>v<^^v><v><<^<>>>v<^<^<<vvv^><>>^^>^>^>v^<v>^v<^^<v<vv<<vv<<^^v^v^>v>><>^<v>vvvvv<><^^<^>><<><^<>^>^>v^>^vvvv<^><<v>^^><^v>v<^vvv<v^>^<v^<><v^><^^^<>><<<<><^^vv^><><^<^<^>v><<<^>>>^^^>>^^>v<vv><><<^^>v><<v^<>v<>>^><^v^v>^^<<^>v<^^>v<<^^><v<vv^vv><>v>vv<<v<v>v^^^^^v^>><v<^<v<^vv>^v<>^>>v>v<<^^>>^<><^>v^>><^<^>>>^vv>>v>^^vvv>^v^>>>v<><>^>v^>^>v>><v<v^<^>v>^>^>><v<^<^<v<<<^^^^<>v><^<^><><^<><v<^<v^<<>v^v>^^vv><^^v^vv>^<v<>v^<>^<v^<^<^<
>><>^<<><<^^>>v>><<^<v<^><^<v>>v<^vv^>v><v><><^^v^v>^<>>^<<vvv>v>^^<vvv>v^>^^>><<<<v>^v^v^<^^v^<>>vvv>>^>^^^^vv<v>^<^^^^<><v>>vvv<v^vv><>^>>v^^^v>><^<><^^<^vv><>v>vv<v>>vvv<v^>^^<>>v^<>vv><<^<vv<vv^^<v>^><>v^><>>>><^^v<vv><v<>^>>><^vv><>>v>^<v^<>><<^>^>^>>v<^<><>^>^vv>^v<vv^^v><^<<^<><><^><v>^^^v^^<^vv^v<><^>>^^^<v^v<^>>^<<^<>>>^><<^>>^v^>>v<<>>>v>>^^^^^v>>v>^><^<>^vv>v>vvv><>vv<>v<>>vv^<<^v<v<^>^>vvv>><v^><>>^v^^>>>v<^^^^>>vvv^v<><<>>v^>>v>>v>^<<^^><^^<>v^v^<v<v>^vvv<^>^><^<^^<<v><vv>>>v>^^v^<<>^v>^><^^>>^<<^^>>vv^v^v<v>>vv>>><^>^^v^><>^>v^<^v<^>^^^>v>v^<v><^v<v^v>><<^^<>^<>>v>^<vv<><^v>^^v<><^v^^^<^^<v>v<v^^^<>^v<v^<^vv^><<><<<<v^v^v<^><v^^^v<<vv^v>v<v<>^<<<>><^^v>>v<^>vv^^v<<v^>>^>^vv>v>>>vvvvv><<^<^><><^vv<vvv^>><>v<<><>^<>vv<<^v^>^v^<>^^vvv<v^v^v>v^<><<<<v>v^v>>^<^<v<v<>vv<vv^><<^>vvv^<v^v<v><<v^>><v><^vv^<^^><<^v^vv><v^><>v^^<vv<><^^^>v><<<v^>v>v<<><>v^<^v><^>>>>v>>^^^>>^>v><>>^v<>>vv^^><v^>^<^<v^>v<<<^>^><v^v>>^v<<v^>v>^^v>>v<vv^v<^vv>v^<^><^>vv^<<v^^<<^><>>^^^<<>>v>^^>^^v^>>^><
<<<^v<^>^>vv><v^v>^>v^^^<>^vvv^>v<<>v<<<^^>^^>><^<^<<>>^<<<<<<v^v^^v>>^v^>^^^>vv^<><>^<v^<vv<<v<>>^v>v^><<>>^>>v^><^^^^<<^<v>^<v^>vv^^<<>^>^v<<<^^>vv>>^>^^^<^^^><>^<vv>>v<>v<v>vvv<>^^<^<><<<>^vv>>^><v<<>^<v><>^v>><v<<^^>v<<<v<v>vvv>^<vv^^^^<vv<v^<^v^<<^vv>v^<^><^v<^^<^<<<v>^<<v<^>>>^^<<v<^^<>^v>vv><^^v<^<v^>v^<^v>v>^<^^^v<>vvvv<^<<><><v><>^>>><vv^>>vv<^<<><<^^<<^^^<vv<^><<><>>^v<>>^<^^v^^<>><>>>><^^^v^^vv><v^^>^><><<v<^^^>vv<>>^v>v>vv^<>vv^<vvv^<vvv>^>^vv>^v^<^>^^^>>^^v^>^vv^^<v<vv<<vv<vv^<^<v<v>>vv^v<<>>vv<>^>^^^^<<v<v<v<^v^>^>>^<v<<>vvvv>>>>><v<>v^>^v^><v>>^>^v^^vv>><<^<<v<^^^^>^<^^v^>>v<>^><<vv><<<>>><v<<><<^^^>v<^<v<<^^v<><^v>^<<>vv^v^>>^^<v><^v^v^vvvvv^vvv<^v<v><vv<>^<>v>v>v<>^^<<v<v<>^v<<^v^<v^v^><>>^>vvv<^<^^<>^vv<vv^>^>v<v^v^^>>^^v^<>><<v^^v^<^v<v>>vvv<<^v<<^v<^^vvv<<<>v>v><v>>^v^^<>>v^>>^^<>^^vv<>vvv>>^v^^<>>^><^^>>^<v>><<<<>^v<>^>>v<^^>^v>^>vv<v<<<<>vv^^^vv<^^<v^<<<^>^v><<>v^>v^>^<<v><>v>^>^^^>>vv><vv^^^^^>vvv^>^>^<>v>vvv>>>>^^^>v<<^<>vv<^<^>>^<^<>>><<^v<><><<<v<v^v>v<<vv<^>>
<^v>>><v^>^<^v^v^><v^<^v^<vv>>>^^vv<v^>^<vv<v<><>^^>^<>vv^<vv>>>v<^>>>vvvv<<^^^v^v>><vvv<<v<<vv>>vvv<^<v<^<<<<<^<v<<<vv^^<<>^vv<^>><>vv^<><><^^^^<>vv^^<<>^>^<v^vv>vv^>^vv<<^<^>v>>^<vv^>>v^v^v<>>>v><v>^>>^^<<>>>><^^v<vv^<<<^^v<^<vv^<>>>v<v<vv^^><v^<>v<>vv<v>v^^^><^>^<v^vvv<v>vv^v^<v^^^<^<<>vv<<vv<v<<>><vv<><<v^>^v>>>>>>>^^vv<><vvv^^<v<>><v^^vv^^<>>^>><>>>><v>v<>><><vv^><>^^>^^v^>^^vv<><<v^^<<>vvv>v><v><<^v>^^^>v>^>>v<<<<^<>>v<><<><>^^^vv<<^<v><<^><^^^v>^<>><v^>^^v^>^vvv^^<v><>^><>><>>v^>^<^vvvv><>^<<>>><<v<^v>v<^<>^^<^^>v<vv<^<<>^^<>^<<<>v<v^v<<vv^<v<<^<>vv<v>>v><^>v<<^v>>^<><^vv<v<v>vv<<<v>^>^v>v^><<^vv^><>><>v^^^^<>^v^>^>v^^^>v<>>>>v>><v>v>v><v^vv><>v<<v<^v>^^^^>v^<^^<v^<>>><^><^>v^^^<><^<v<v>vv<<>v^<>^vv<<^vvvv^<>v>v^<><^^>v<>v^<^^v<^v^<v<v^>^vv>>>^^^v>v><^^^<>v^v>vvvvvv><>v^^>^^<<>vv<v^v>><^v^^>^^v<^v>><v^^<><v><^><<v^<<>v<>>^<^vv^>>><v>>>^<^vvv<>>v<^v<^>^v<>vv^>>>v<>><v<v^<^v<v^^v^^<v^^^^>vvvv><^^<^vv^v>v><^<v<<^^>vv^><v>v^v^^v^>vv<<v<>v<^<^><>v^^v<^<v>^^<><^>><<^<<<^>vvv^^>><v^>^>
>>v^^vv^^>^^^^v^>>^vv<^^<v^^^v<>^^^>v>>><>^<>>>v<<><<v<v<^^>>^^<^<<^>^<>^v<<<v>>>vvv>^<>^^^v<^^^^^<<<v^<v>v><v<<>><v>><><v^><^<^v>^>><v^^>>>^v>v^v^<>v<v^^<<<<v<^<<vv^vv^>>><<<v<v>><^>^v^^^<^<><<vv<^^v^><><vvv<v^vvv>>^>^^vvv<<v>><<vv<>v><^v^<^<^^v<v<<v<<^<^>>vvvv>v><<^vv^^<<^^^>v^>>>^^^^^>>^<>v<><<^<<<vv^v<^><<^^v<>>v>vv^>><>vv^>vvv^^<<>>>v<^<^^^^<><>><^^>v<v<v<><<^<v^^<^>><^^v<^^<<^vv><>v<<^>v<>v><<^^<v<v>^>v<^<<v^<v<>^vvv>^^<><><>^<>^^>>>v>>>^vv^^^><v^<<<^>>^<>>>^<>^>^>^v<v^<vv>v^vvv^v>vvv<v^<^^><^^^<v<<vvv<<<^<<<^<v^<<^v>^<>^vv<><>>v<vv<>>><><v>><v<>>^vvvv>><>>vvv^vv<^v<v<^^^v<<<>v>><^<^^<><v^><<^^<><>v^<v^v^<vvv^<<^^><^>v^<<v^<<^v>^^>^^^v^^<<v<^^<>>>v>^<^^v<<>v^v>>v<^v^<^^<^>v^vv^^v^>>v>v><v<^>vvvvv<<><>>^v^^^^>>v<^>><^^>^^<^^v>>v^^<^<^>>v^^^^^<v^>^v><<>^<<^<<^v^^^v<<>^v<v<>>v^^^^>v^>^<vv^v^v>vv^^>v<v<<^vv>^<v<>^>^<<v>>^v<^^v>^v><v<vvv<^v<^v>^^^vv^v^^<><^v>><^^>v<^<>v<v^>^>v>><>v<^>v><<v<^><v>^^>^>^^<<v<^^<^<vv^v^^v<v<v^^>>v<><v>vv^v<^<<^v><v<<>vv^^<<<v^^<<^<<v>v^^<<^<>^>vvv><>>^>>>
><<>^v>>>v<v^<v>><<><v><<^><v>v^^<>v>v<v><<v<<<^^><^>^vv><>v<>v^v>>>v><<>>v<v<>v<<<^<^<<<<v<>>>^>^vv^^<<^<><<>^<^><^v^v<v<v^vv>v<<v<v><^>^<vv^v>^^v^v>>><>v<v<^<<^^>^vv^>><>v<v<<^v^^<>>v<v^><^^v^<^>v^v>vv<<><v^v^v^^<^<^v<>v^v><><>vvv<<>><^v<<<<v>^<><>vv<<>^^^<>^^<v^><vvvv^^^v>>^^^^v>v^<>>v>v>>>vv<vv<>v<<>^<v><<v<^<v<>^<<>vvv><^<^^>>v<^^^<>v>^v<^><^<<<v^>>^<^<^^>>^>^vv^v^<>^<v><<v>^v>>vv^<v<^>vvv<<<<<^>v<<>v^>v^v^^>^<^^>^vv>^<>v><v^<><>>v^>v^><><<<^^^v<<v^<^>^v^>^<^^><v^<>><^vv^^<v>><<^^v^>v>>v>^>v<^^v^<v^<>>><>v<^^<>^<>^^>><<v>vvv^><>^v<^<v<>^>><^^v>v>>>>>^>>vvv><^^>^<>v^<<<<<<>v<^vv^<<<<^v^v^<<<^^v>^vvv>v<^v<^<vv^<>><v^>>v^v><^^>^<^<vvv>>^v>><^><<vv<^^<<^><<^vv<vv><^><>^v^><v<><^><v^<>^>^>>^<^<<vv<vvv><<^vvvv><v>>>>>v>^^>>v^<<>^v<v^^>^><<>^><^^<^>vvv<v<v>v>^v^>^^<vv>>^>^><<<<>><^<^>vv^vv^v>v<vvv^^>><>vv^<>v>^v>v^<>>v>v<^v><>^<v^<<v>v^>>^>^<<>vvv><>v>^v>^v<vvv><>>vvv<v<^><^<^<^vv<>>^^<^>><<^v^<>>v<>v^v^>v><>^>^vv<v^><<><vvv>>>vv>^>>^v^<<^><<v><<><v<<vv^<<^v>>><^<>v^>><^>>^<<v<>^<^<^<>^v
^v>vv<^><^^^<^<<<<<<>v^vvv>>>><v<v^v><<vv>vvvv>^<>v>v<><v>vvvv>v>>^>^v>v<><<^v<<><<^<^v<v^v>>^^v>vvv<>v^v<<>v>>>>v>><vv>><><><^v><<v>^<<>>>><^>>>v^>>>>v^><<^<<<^v^vv<^><^>^vvvv^vv>^v>><>v^<>^^^^^vv^<^v<^^>^^<<<vv^vv^<<^>vv><<>vv^^^^v^<<<<^^<<>v>^^vv^v<<>>^<^^v^v>>><^>^>v^<>^>v<<>><^<>^>><^<^><>>^<>v^vv^v^<^<^vv>^v<<v><><<><>>vvv<>>v>>^<>^<vv<<v>>^>^v^>>^>vv^^<>v^>>>^v^v>^>^v^>v^vv<>v^^<>^^<v<<<><>^<>><>^<><v<<v<>^^>^>^^<<v<<<<^^v^<^<<>v<<^>>>^^v<>v<>v>^<v^>^<^><^v^><>^>v<>vv^<>v>^^<^^^>v^^v^<v^<<<^^>v<<>^v^<>><v<<>><>>^^^v>v^vv><<>v^v^^><><>^v^<>v<>><^>^><vv^^v<<v>>^^vvvv>vvv^>v^v<<vv<>^v<<>^<^<v>>vvvv<^v<><v<^<>^^v^v<<>>^<v>vvv>^^v<v>>v<<>^^v<^><^^>v^<^><v<><><>><v<>^<<><><<<<<v^vv>><v><^v><vv>^^^v><^^>^<<^>>^^<^v>^>v<v><vv<vv^v<^>^vv^><<v>vv^>><^<^<^v^>^^vv^^^<>v<v><v><^v^^<v^<v>vv><<<<^^v^^^vvv<<v<^<^><<><^>>v<<^>><^v<<<v<>^><vv<<<vvv>>^vv<^<^v<>>^>v>>v<v^v^>^<>^^>^<>^>v>>v^<v<v>>>>^<<>v^v<v^v<^^><<>v<<<v<vvv>>^>>v>>^^<>^><^^v<>^><v^<>^v<>v^^><<<^>v^v<^>^>^><<<^<v<>v^^^v>>vv<^v^^^^v
v^>v^vv><v^<^<v>vv>vv^>v^<>v^vv><>>^v<>v>^><^<^>>^^>><<<v^^<>vv>v>><<^<v<<v<<>v>^^v<>v>^>vvv^v<vv>v>v>^vv>^<^^>>v^<v<v>v<<>^<>^v><><^^^<<v>v><<<>>^v><v<>^vv^^^^><>^vv>^v^<v><v<>^<^v>v^>^^v^>>v>v^>vv<v<>>v^>vv<^v<v<^<>v>>v<^>^<v<>^>v><>^vv<<>v^v<<<<<^v>^<<v^^>^<v>^v^v<<^>>>>><^<vv^<v>v^>^<v^<><><><>vv<v^^vv^><>^><>><<v^<>v^><>>>^vv<>^>>v>>^^<^^^>>^vvv<<>>><>^>>v^v<>v>vvv^><^^^^<>vv><^>^^v<^v<<><^<>vv>^^v>^>>^^>^>>><<^<vv^v^v>^vv^vvv^><><v^<<v<<^^v^v<^v<^><^v>^<^v>^^v>vv>^<v^>>vvvvv>>><>^v>v>>>vv>^v<vv><><><v<vvv>v^v^>^^<^^^^^^>>v>>^>v^^><<<^<^<>v>v<vvv^>>^vv^vvv^v^>^vv^vv>^>>^>v^<v^^^v<<^^v^<vv>^v<<<v^v^<^^<v^v<v^<<>><><>>v>>vv<>vv^>vv>^>v>><<<<^>v>v^>v><>v<<<^>^^>>><>v>^<^><<<v>v<<v^^><<v>>>^<>><^^>^^<v>vv<>>><<^^>><>><^><<>^^^vv^<<^>>>vvv>^v<v^>>^^>v^>vvvv>^<vv<^<^v^^v^<<><vv^^>^>v<^<<vv<>>v^>^v<><vv<v<v<v>>><v<>>><>^<^v^>v>^>vvv^^>v^<<<v>v><><>>^>>^^<<<v^>>^vvv^vv>>^^>v^v>v<><^<^<><v><<>v<<>>>v<^<v^^>>v<^^^><<^v><^<^<>^^^^<vvvv^>^>vv^v^<vv<v<^><<^<^^<<<v><>^>^v^^>>>vvv^<^v<v^<>>^v^<>
>^^>^>v^<v<^^^>^^vvv><vvv>>v^^v>^v>^<^<^^v<v<>><vvvv><>^<<<^v^v^<^><<^<^v>v><<vv^<>^^<>^<><><^v>^^<^<>>><>>^<v>>^v>>>vv><^><>vvvv<<^<<<>><^vvv^vv>v>^^^<<><>^vv>^><v<<v>^v><vv^v>^^v<v<v<<^^^vv>^>vvvv>><^^<^>vv>^<><>^^^^><v^v^vv<><>><^>vv><^<<v<^>>><>v<><vvv^^v^^^^>>^<v>v>^v^^<^v^<^^<^>^^<>^^^^v<><>v><vv<vv^<>>^>v>^>>>v^v<v^^>^v^^v>><<<>^v>^><v>>>v^v><^>v>vv<^^><^>^^>v^^vv>vv>vv<v<v^<>^^^^v^<^vv^<^v^v>^<v<v><^><^>>v>^>><v<v^<><vv>>vv^^v<><v^<^<^^>>^^<>><^>vv>v>>v<<v><<vv^<vvvvv^v><>v><<>^^^v<v<vv^>v>^^vv><v<>^v^<>^><v<<^<v<>>>>><>^><^>^<>v<<^^v^<v<<<^>^vvv>^>v>>>v^^vv^v<v><v><<v^vv<v<^^<<>v<<v^^><^>^<^>v<^v<>v^<<>>><^<v^>><^v>><v^<>v<<v<^<v<v<>>>v<v^v^>>>^<>v<^^<>>v<<<>><^^>>v^^<^>v>^^<^^<<vvv>v^<<^v>^^<<v>>v<>^<^v>v>v>>v><^>^<v>>^>>v<<vvv^vv<<^><^<<v>v><<^v<v>>v^^^>v^v^>><^^v>v<^vvv^<><^<v<^<^v<vv>^v^^<>>v^<>^<v<v^>>^v^<^<v<>^<<^v<<<v<^v<^v^><^<^<v^<v<^v^<^vv<^><>^^><v>v^><v^<^<^<<>^^v>^<v^^<<<<^>v^<v^vv<^>v^<>>^<^^<<><^^>^^<v<>vv<v>^<^<vv>vv><>^<v>>v<>v>>v^<^>^^>v^v><<v^<vvv>><<>v^>^v<
^<><<^^>vv<^^<<<^>v>v>>vv>>^<^<v^vv><<v^^^^>v^vv>v^<v^v^<>^>^v<>v<v<^>><<v^<>^^^<>^^><v>^>^v^>>^^v>^>>^^^>^v^^^<<v<<<><^^<^v^vv<vv<><^v><<>v>v^<^<<v>>><vvv>^v><^^>^^<v^>^>v<v>><<^>^v<^>>>^^>>v<>>v^^>^v>^<vv<v^^v<<^v^v<<^<>>^v<<<<v<<vv><^><v>><^<>>v><>^v^>>v<v><<v^v>v<^<>v^>^>v><v<>^^<^>>^^<v<v>>v^>^^^><v^<^<^vv<^^vv><v><v>v><v><>^^<v^>^>^^v<^<v^>>>^>vv<v<v<^^v<^^^>>v<>>>vvv><>^^^v<^<<^>^^<>v>^>vv^v>>><<^<<<>^>^v^v<<<^^^<<<><><v<<>><^<vv<v<<v>v>^<<^v>^<^^^<>><vv^<>><v>>^^^>^^>v<>v^^<<v<v<<>^<<vvv^>^<<^>>v>^v<><>^<>^v<<v<v>^<><vv^>v^v^v><vvvv><vv<^>^vvv^v>v<^^v>^^<<v>>^^^^^^^^^v>^v>v<^^>v><<><<<v<<^><vvv<v^<^><v>^^<v^><<<^^v>^^vv>v^>^<><<^<^><>v^^>^<v^<>>v><v<<<<><<<v^><^<^>>^<>^><v><>^><><>^<<^^>v><^<>^>v<^v<>^^<v<^^^><<^>^v<v^^vvv<v>v^v^vvvv^v^^>^vv<^>^^v<v<^>^^v>>v>v<><^vv<><v^v<><^vv^<<^^<^^^>^>><v>^v><^>^<^<^>>^>v^^>^v<v^^vv^^>v^^^<>^v>>>>^v<<vv<^^v^v>^<v>^><vv^v<v<v<<<>vvv>v<>v<><<>^^>vv<v^<vv^<vv<^<<v><v>^<^<>>v><^<^^^>v^<v<^v><<^>vv>^v<<<^<v^^vv^v^<>><v<^v>>><<<v^^v><^^>^^^^v^>^^
<v<><vv<>v<vv>><<^^^<>>^^<>v^^vv^vv<v<vvv<<v<<>^>v<vv^>^<vv>>^>>v>><>>>^^v^^v<v><v<v<>>v>^<><v^^<v<^^^<v<vvv^^^vv^^<^>>^<^v<>>>v^<^>v<^vv^<vvv^v><<^<>v>>^^v^^v^^v^v><><vv^>vv>^<v<^^>^v<^^<v<v^^<>><vv><^>^^^>^^^>>v<v<><>v^^v<vvv<>v<^><^>>>>v^><^v>^^><^v<<v<>^><<^<<>>>^<^><<>vvv><^^<v>^<v^>^v^<<vv<^>>>^^v^^v><v^>>>>^vv<v<^v^<v<vv<v>>>vv<<^^<v^><^<^<>^>v<>^^v>>^vv^^<<>vvv<>><>vv^<^v<>^>v<>><<^>^<^<<><vvv^<<<><^vv<><^<^vv^^<<><v^>>^vvvv^>^^>><vv<^<^>^<v<^^v<<><>v><<^v<v^^>>>^<^v^vv>vv^v<v^^<>^vv<<v^<>^v<v^<v^<>^^<v>v<^>>^v<vv><<v>^^v>v^<>><^><v^v^>^<><>><^v^^<v^><>>^<vvv^^<^vv<>^v<^v>>^^><v>v^<^>v<<<^^v^^vv^v>^v>^>vvvv>^<^>v>>v<><<v<>v>^>^<>^>v<^><v>vv><<>v^<<v^<>^>^>v>^^<v^^>><^>^^>^<v<v>>>>^<<<<<>vvvv>vv^>v<vv><v<^<vv<<vv>^>>v^^<v^^^^^^><>>vv>^v^>v^<<^v>^>>><^^<v>^^>^vvv<>vvv^>^>>v^<><v><v^^^<^^<><^>>vvv^^>v<>>>>v^^>^<<vvv^v>v^<<<<><v>v^<<vvv^^<><v<^<>^v<><<^^>v<v<<>vv>^<^^^<vv^^vv<<^v><<<vv<><v>^<^<>>^<^<vv>vvv>>^><><<><>>>v<>>^^<>>v<<v^^v^>^<<^>><^<v><v<vvvv<>vv>><v^v^<v<^^^<vv<>><<><<
^<^<>><>>^^>v^>><>v<^<>^<<><^><>v^<v>>v<<><><>v<v>^v><^^>^^<v^><^<><>v>v>v<>>^<^>^>v>v^<vv^v<v^<^<^vv>v^^v<<<<><vvvv<^vvv>^^<><<^^>^>v><vvv^>^><>>>v>v<^v>>^^^<v>v<<v>^^v>^<<v^<vv><><^^v<>^v<^>v>^^>vv^v^v^<<>vvv<^^>v>><>v>>v^vv>><^^>^<>>^<^v>v^>>>>^^v>>^vvv<>vv<>v>>v><^^v<v>v>>v>>^<^^v<>v<>v>><v>v<>>>v^^v>v<^<vv>v^<>><vv<>><^^^vv>>v<v<v^v>v<>v>>^<v>^vv^<v>v^v<vv>>>v><v<^<^^<vv<<vvv<<^>vv>^^<^<^><<>vv<^>^v><^<vv>^^v^>>^>vv><>^<>v<v><^^^<v^^^>v^v<><<>>^vv>^v>>^>v<>v^<<^^>><<^><<v<<^<v>^^>^vv^v^>>^>^^^>>v^<^<><^>vv>^vv<<>v>>>v^^vv^><<^>>v>v<<>^<^^<<v<>><>^vv><>v>^<<>^^vv^^>v^v>>>^v^<vvv>^^vvv^^v^<^>^^v<<<v^v^^vv<><^>v>v^><<><v<>v<>>><v><><vv<<<v<<<v<<<<><><>>v><v<vv<v>v>^<>v^>^><<>>>^<<<^>>><>>>^v<><>^vvv<>^<<v><><>v>v>^v<<><>v<v>^<v<v^^>>^^^>v><<<>v^>>v<>^>^>^<vv>>v<v>>><<v^^^><^>>^vv<vv^>^v<^<<>>>>^v<<^>>vv><^v^^^v<vv<<<<>v>>v>>>v^>^>>^^>v^^vv^^v^^<v^<v>>v>><><>><^>>v<vv<<^<>v<v^>v^<v<>^^^>><<><v>^vv^^>^>><^>>v><>v^<<vv>v>v><>^vvvvv^>^^^^v<<v^^^<^>vvvv>^^^><>^<vv>^<v<^vv^<<><v^>>^v^<vv<>
>>^>>><v>v<v><>v^><v><<vvv<^vvv><v<v^^v>^^vv>v^>v>^v<>>v<v>>^v<^<<<^<<>vvv^v>^^<vvv>^<^>>>v<^>>^>^v^^>v>^<>v<<^^><^v<<^^><<><<><<^<v><^^><^><<^>>vvvv<<>v><>v^>^<^>v>^^^>><^vv<vv<^>^<vvv^<<v^<^v^v^>>^><v^<v<v^<<vvv<<>^<^<^v<><^<v><vv^<<<<^v<v<>^^v^v><^>>^<vv<^<^<vv>^><^<^^>vv^>v>>>v<>^v<vv<>v^^vv<>^vv^<>v<v>>^<vvvv>^v^>><v^v<>><^><>vv<<><^^>vv<^vv^<^<<^^>vv>>>>><vvv>^^<><<v>v^v>^>^<<v<<v>>>v<^vvv^v<<<^<<vv^<>^><<>^v<v<v^v^^^^<^<><<>v^^>>^<>v^vv><v^<^<<>><^v>>^^v^v>^>><<<v><><v^v<v<<v>><<>v>^><<<>>vvvvv^>vv^<><v^>v<v<v>v>v>>v><^v^v^>>v^>^v>^^<<^<v^v^^><<^^^vvv^<^^v^>v^vv^^>vvv^<>^<>v<<<>vv<><vvv^>v^>^<>^v>v^<v^<v<v<v>v<>^>^>>v><^v>^v^^<^>>v^><>^<v>^<^><<^<<vv<>^vv<<vv>v>>v<>v><<v>v^^^^><v<<vv><v>vv^vv>^v^>><<^>v^v^v>><^<v>^^<vv<^<<^>^^<vvvv<^>>^>>>^>^>vv<<^<><<^^<^v>v><v^^^^>v<>v^vv>><<<^<<>><v<v<^>>^<v^^<v>>^^<>v^vv<v<<v<<>v^v><<<>^vv<<^^<>>vv<^><^<>v>vv>><v<^vv^^><^<^^v<v^<^^v>^vv^>^^^<^^>>v><><v>^>>><<^>^^>v<<^><>>^^vv<<>>^<v>^><>v>>v^<^v^^v^vvv^^^^^v^<>>vv^^>^^<>>>^<>>>>^^^<^<<<v<<v^
v><<v><v<v<><^<><^>vv>>v>v>>>^>^v>v<v>^>^^<<v>^^v>^^><^v^<v<><v><v^>^^<v<^>^<^<vvv^v>>^>^>^v<^v^vv^vv>>>><v<><^v<<^><<>>v<<v><>v><>v><^v^^>v>^><v>><><<^<>>v>^>^v^^^v^<<v>^<^vv^><v^<>>^^<>><<>vvv>>^^v>>>^>>>^><><<^v><^^v>v^>v>^^<<>^v^v>><^v<><v^<vvv<^<v^^>^>^^<^>^>v>vv^<>^<>^<<<^<<^v<^>><v>><^v^v>^v^v>vv^<<<<>vv<^<>v><v^>>>>^^^<^>^v<<^<^><^<v>>>^^v<vv>vv^^>>>v^>vv^^>v^>v<<^v><<vv>>^<<^>vv^<^^>^v><<<^><v<><<vv><>v^^vv>>vvv>>>^>>^^vv<^<>>v^v^>>>v<>><v^><v^<<>><^v><<>vv>v>v^^vv>v^>^v<<><<<>>^^><^>>>v^^vv>>v><^>v>v^^v<<^>>^><>v^v<<<>v<^<>^<<<^v>^><^>^^v^^><>vv>v^^<v^^^^><^v<^><>^vv>v<v^^^^^^>^^v>>^v^<>>>vv>^>^>^v<<>^vv<<>v^^^v>><<<<v<<>>><>^<vv<<<v^^>^v<<<v^v^v>v^^^^^<><^<>>^^<<v<v<>>^<>v^>><^v^>^<^v^vv>v>>v<vvv<>v>><^v><<^<^^^^v<><v<>vv^>^><^>^<v<<>><<^><>^^v^^<><<<<>vv^v>^^><>^v^^vv^^>^v^>><v^^<^<^<<>^v<v<<>v>^^vvv^<^^^<>v<^^<v^v>vvv>>v^vvvv<><>^v<>><>v>^<^v<^v^><<^<>^>><v<^^>>v<>vv>>^^vv<>>>><<<><>><^^^v<<^><^<><<v<v<v^<v<<<<^v<><<<vv>v>><>v<>>><^<>^>>v^v<v^^v>v^vv<v><>^v^v>^<>^><>v>^^<<`;
console.log(input[0]);


const inputa = `##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^
`;

console.log(inputa[0]);


const inputs = `########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

<^^>>>vv<v>>v<<`;

const inputs2 = `
#######
#...#.#
#.....#
#..OO@#
#..O..#
#.....#
#######

<vv<<^^<<^^^`;

console.log(inputs[0]);

const sleep = (ms:number) => {
	const start = Date.now();
	while (Date.now() - start < ms) {
		// eslint-disable-next-line no-empty
	}
};


const WALL= '#';
const ROBOT= '@';
const BOX= 'O';
const EMPTY='.';

const dirs = {
	'<': {x:-1,y:0}, 
	'^': {x:0,y:-1},
	'>': {x:1,y:0},
	'v': {x:0,y:1},
};

type Dirs = keyof typeof dirs;

const sum = (a:Vec,b:Vec) => ({y:a.y+b.y,x:a.x+b.x}); 

const updateMap = (p:Vec,nP:Vec) => {
	const icon1 = map[p.y][p.x];
	const icon2 = map[nP.y][nP.x];
	map[p.y][p.x] = icon2;
	map[nP.y][nP.x] = icon1;
};

type Vec = {
	x:number,
	y:number
}

class Movable {
	pos: Vec;


	constructor (pos:Vec) {
		this.pos = pos;
	}

	posToStr(pos = this.pos) {
		return `${pos.x},${pos.y}`;
	}

	setPos(pos:Vec) {
		this.pos = pos;
	}

	doMove(nextPos:Vec) {
		//updateMap(this.pos,nextPos);
		this.pos = nextPos;
	}

	value() {
		return this.pos.y*100+this.pos.x;
	}

	forwardMove(deps:number[],dir:Vec) {
		const uniqueDeps = [...new Set(deps)];
		uniqueDeps.forEach(box=>boxes[box].doMove(sum(boxes[box].pos,dir)));
	}

	move(dir:Vec):boolean {
		const nextPos = sum(this.pos,dir);
		const atNextPos = map[nextPos.y][nextPos.x];
		if(atNextPos === EMPTY){
			this.doMove(nextPos);
			return true;
		} else if (atNextPos === WALL) {
			return false;
		} else {
			const boxI = boxes.findIndex((box)=>
				box.posToStr()===this.posToStr(nextPos)||
				box.pos2ToStr()===this.posToStr(nextPos));
			console.log(nextPos);
			console.log('boxI',boxI);
			console.log('CHECK');
			const [isNextMove,deps] = boxes[boxI].checkMove(dir,[]);
			if (isNextMove) {
				this.doMove(nextPos);
				this.forwardMove(deps,dir);
				return true;
			}
		}
		return false;
	} 
}

class WideBox extends Movable{
	id:number;

	constructor(pos:Vec,id:number) {
		super(pos);
		this.id=id;
	}

	toString() {
		return `Box x:${this.pos.x},y:${this.pos.y} id:${this.id}`;
	}

	makePos2 (pos:Vec) {
		return {x:pos.x+1,y:pos.y};
	}

	pos2ToStr() {
		return `${this.pos2.x},${this.pos2.y}`;
	}

	get pos2() {
		return {x:this.pos.x+1,y:this.pos.y};
	}


	doMove(nextPos:Vec) {
		//updateMap(this.pos,nextPos);
		//updateMap(this.pos2,this.makePos2(nextPos));
		this.pos = nextPos;
	}


	recur(nextPos:Vec,dir:Vec,deps:number[]) {
		const nextPos2 = this.makePos2(nextPos);
		const movedBoxes = boxes.filter((box)=> box.id !== this.id &&(
			box.posToStr()===this.posToStr(nextPos)||
			box.pos2ToStr()===this.posToStr(nextPos)||
		box.posToStr()===this.posToStr(nextPos2)||
		box.pos2ToStr()===this.posToStr(nextPos2)));

		console.log('@', this.pos,this.id);
		console.log('nextPos-',nextPos,'nextPos2',nextPos2);
		console.log(this.posToStr(nextPos2));
		console.log('moved',movedBoxes);
		const nextMove = movedBoxes.map((box) => box.checkMove(dir,deps));
		if (nextMove.every(b=>b[0]===true)) {
			return true;
		}
		return false;
	}

	checkMove(dir:Vec,deps:number[]):[boolean,number[]] {
		deps.push(this.id);
		console.log('---');
		if(this.id === 12){
			console.log('!!!!!!!!!!!!');
		}
		const nextPos = sum(this.pos,dir);
		const atNextPos = map[nextPos.y][nextPos.x];
		const atNextPos2 = map[nextPos.y][nextPos.x+1];
		console.log(nextPos);
		console.log('atNextPos',atNextPos);
		console.log('atNextPos2',atNextPos2);
		const posStr = this.posToStr(dir);
		if ( posStr === this.posToStr({x:-1,y:0})) {
			if(atNextPos === EMPTY){
				//this.doMove(nextPos);
				return [true,deps];
			}else if (atNextPos === WALL){
				return [false,deps];
			} else {
				return [this.recur(nextPos,dir,deps),deps];
			}
		}
		else if((posStr === this.posToStr({x:1,y:0}))) {
			if(atNextPos2 === EMPTY){
				//this.doMove(nextPos);
				return [true,deps];
			}else if (atNextPos2 === WALL){
				return [false,deps];
			} else {
				return [this.recur(nextPos,dir,deps),deps];
			}
		
		} else if(atNextPos === EMPTY&&atNextPos2 === EMPTY){
			//this.doMove(nextPos);
			return [true,deps];
		} else if (atNextPos === WALL || atNextPos2 === WALL) {
			return [false,deps];
		} else {
			return [this.recur(nextPos,dir,deps),deps];
		}
	} 

}

const robot = new Movable({x:0,y:0});
const boxes:WideBox[] = [];
const walls:Vec[]=[];
// HERE
const [rawMap,rawPath] = input.trim().split('\n\n').map((seg,i)=> {
	// map
	if(i===0){
		return seg.split('\n').map((row,y)=>row.split('').map((c,x)=>{
			if(c===BOX){
				boxes.push(new WideBox({x:2*x,y},boxes.length));
				return '[]';
			} else if(c===ROBOT){
				console.log('robot');
				robot.setPos({x:2*x,y});
				return c+'.';
			} else if(c===WALL){
				walls.push({x:2*x,y:y});
				walls.push({x:2*x+1,y:y});
			}
			return c+c;
		}));
	// path
	} else {
		return seg.split('\n').map((row)=>row.split(''));
	}
});

const path: Dirs[] = rawPath.flatMap(cA =>
	cA.map(c => (['<', '>', '^', 'v'] as const).includes(c as Dirs) ? (c as Dirs) : 'v')
);

let map:string[][] = rawMap.map(row=>row.flatMap(c=>c.split('')));
// rawMap.forEach(row=>{
// 	rowArr
// 	row.forEach(pair=>pair.split('').forEach(c=>map.push(c)))
// });



console.log(map);

console.log(path);



//console.log(robot);
//robot.move({x:1,y:0});

const visualise = (shouldClear=false) => {
	render();
	if(shouldClear){
		readline.cursorTo(process.stdout,0,0);
		readline.clearScreenDown(process.stdout);	
	}
	
	map.forEach(row=> {
		row.forEach(c=>{
			if (c===WALL){
				process.stdout.write(chalk.gray('c'));
			}else if (c==='@') {
				process.stdout.write(chalk.red('@')); 
			}
			process.stdout.write(c);
		});
		console.log('');
	});
};

const render = () => {
	map = map.map(row=>row.map(()=>'.'));
	walls.forEach(({x,y})=>{map[y][x] = '#';});
	boxes.forEach(({pos,pos2})=>{map[pos.y][pos.x] = '['; map[pos2.y][pos2.x]=']';});
	map[robot.pos.y][robot.pos.x] = '@';
};

path.forEach((dir:Dirs,i)=>{
	console.log('step',i);
	//console.log(boxes.forEach(b=>console.log(b.toString())));
	render();
	robot.move(dirs[dir]);
	//console.log('input:', dir);
	visualise(true);
	sleep(3);
});
visualise();

console.log('Game over!');
console.log('Score:', boxes.reduce((acc,cur)=>acc+cur.value(),0));
console.log(walls.length);
console.log([...new Set(walls.map(wall=>robot.posToStr(wall)))].length);
let wallsA = 0;
let boxesA = 0;
map.forEach(row=>row.forEach(c=>{
	if(c==='#'){wallsA++;}
	else if (c==='['){boxesA++;}
}));
console.log(wallsA);
console.log(boxesA);
console.log(boxes.length);
//console.log(input.split('#').length*2);
//console.log(map.forEach(row=>))

//151267 // low

