#include <stdio.h>

int main() {
    int start, end;
    int sum = 0;
    printf("Enter starting number:\t");
    scanf("%d", &start);
    printf("Enter ending number:\t");
    scanf("%d", &end);
    
    int i = start;
    
    while (i <= end) { 
        sum += i;
        i++; 
    }
    
    printf("Total Sum:\t%d\n", sum);
    return 0;
}
