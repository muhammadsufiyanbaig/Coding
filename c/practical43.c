#include <stdio.h>

int main() {
    char ch = 'a';

    printf("Print 'a' to 'z':\n");
    do {
        printf("%c\t", ch);
        ch++;
    } while (ch <= 'z');
    
    return 0;
}
