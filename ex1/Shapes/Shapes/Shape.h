#pragma once



#pragma once
#include <iostream>
using namespace std;

class Shape {
protected:
    int width, height;

public:
    Shape(int a = 2, int b = 1) {
        width = a;
        height = b;
    }
    virtual void area() {};
    virtual void perimeter(){
        cout << "errror" << endl;
    };
    virtual bool conditions() { return 1; };
};





// ~shape();



