// Shapes.cpp : This file contains the 'main' function. Program execution begins and ends there.
//
#include "Shape.h"
#include "Rectangle.h"
#include "Triangle.h"
#include <iostream>
#include <iostream>
#include <stdio.h>      //see if  necessary
#include <math.h>  
using namespace std;

int main()
{
    Shape* shape;
    int type;
    int action;
    int length;
    int width;

    cout << "for rectangle enter 1, for triangle enter 2, for exit enter 3" << endl;
    while (cin >> type) {
        if (type == 1 || type == 2) {
    
       
            


            cout << "enter length" << endl;
            cin >> length;
            cout << "enter width" << endl;
            cin >> width;
            if (type == 1) {
                shape = new Rectangle(width, length);
                if (shape->conditions())
                    shape->area();
                else
                    shape->perimeter();
            }
            if (type == 2) {
                shape = new Triangle(width, length);
                cout << "for print enter 1,for perimeter enter 2" << endl;
                cin >> action;
                cout << action << endl;
                if (action == 1) {


                    if (shape->conditions()) {
                        //cout << "whats going on?" << endl;
                        shape->area();

                    }
                    else
                        cout << "cannot print your triangle" << endl;
                }
                else
                    shape->perimeter();
            }

           
            cout << "for rectangle enter 1, for triangle enter 2, for exit enter 3" << endl;

        }
        else if (type == 3) {
            break;
        }
        else {
            cout << "Invalid input. Please enter 1 for rectangle, 2 for triangle or 3 to exit." << endl;
        }

    }
    return 0;

}

