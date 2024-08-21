#include <stdio.h>

int main() {
    float radius, area;
    printf("Enter radius of the circle: ");
    scanf("%f", &radius);
    area = 3.14159 * radius * radius;
    printf("Area of the circle is: %.2f\n", area);
    return 0;
}
