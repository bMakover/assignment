#pragma once
#include <iostream>

#include "Shape.h"

// Base class

// Derived class
class Rectangle : public Shape {
public:
    Rectangle(int a, int b);

    void area()override;
     void perimeter()override;
    bool conditions()override;

};
