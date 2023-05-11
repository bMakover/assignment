#include "Triangle.h"
#include <iostream>
#include "Shape.h"
#pragma once
using namespace std;
void printing(int base, int height) {
    if (height > 2) {
        int middle_lines = height - 2;
        int num_of_odd_numbers = base / 2 - 1;
        int duplicate = middle_lines / num_of_odd_numbers;
        int additional = ceil(middle_lines % num_of_odd_numbers);
        cout << std::string((base - 1) / 2, ' ') << '*' << endl;
        for (int i = 3; i < base - 1; i += 2)
        {
            int spases = (base - i) / 2;
            std::string s = std::string(spases, ' ') + std::string(i, '*');
            //cout << s << endl;
            if (i == 3)
                for (int j = 1; j <= additional; j++)
                    cout << s << endl;
            for (int x = 1; x <= int(duplicate); x++)
                cout << s << endl;
        }
        cout << std::string(base, '*');

    }

}
Triangle::Triangle(int x, int y) :Shape(x, y) { };



void Triangle::area() {
    printing(width, height);
};
void Triangle::perimeter() {
    float  triangle_side = sqrt(pow(width / 2, 2) + pow(height, 2));

    cout <<"Triangle perimeter:"<< triangle_side*2+width <<endl;
};
bool Triangle::conditions() {
    return  width / height < 2 && width % 2 == 1;
}
