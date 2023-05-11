#pragma once

#include <cmath>
#include "Shape.h"
using namespace std;
class Triangle : public Shape {
public:
    Triangle(int a, int b);
    void area()override;
     void perimeter()override;
    bool conditions()override;
};