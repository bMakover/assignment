#include "Rectangle.h"
#include <iostream>
#pragma once
using namespace std;

Rectangle::Rectangle(int x , int y ) :Shape(x, y) { };

 void Rectangle::perimeter() {
    cout << "Rectangle class perimeter :" << width * 2 + height * 2 << endl;
};

void Rectangle::area() {
    cout << "Rectangle class area :" << width * height << endl;

};
bool  Rectangle::conditions()  {
    return   abs(width - height) > 5;
}



