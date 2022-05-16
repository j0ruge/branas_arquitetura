import Circle from '../../src/exemplo01_ride/Circle';

test("Should calculate the area of circle", function () {
    const circle = new Circle(2);
    expect(circle.getArea()).toBe(12.566370614359172);
});