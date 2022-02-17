"use strict";

// declare an array of colors
// var = colors();
// loop through colors in random order using math.random or similiar

// Prob author of code --> @SuppressWarnings("serial")

public class Legos2 extends JFrame {
    private int startX;
    private int startY;
    private int legoWidth;
    private int legoHeight;
    private int baseLength;
    private int arcWidth;
    private int arcHeight;

    //Declare and Array of Colors
    Color[] colors;

    //Allocate the size of the array
    colors = new Color[4];

    //Initialize the values of the array
    colors[0] = new Color(Color.red);
    colors[1] = new Color(Color.blue);
    colors[2] = new Color(Color.yellow);
    colors[3] = new Color(Color.green);

    // Constructor
    public Legos2() {
        super("Jimmy's LEGOs");
        startX = 20;
        startY = 300;
        legoWidth = 50;
        legoHeight = 20;
        baseLength = 10;
        arcWidth = 2;
        arcHeight = 2;
    }

    // The drawings in the graphics context
    public void paint(Graphics g)
{
    // Call the paint method of the JFrame
    super.paint(g);

    int currentX = startX;
    int currentY = startY;

    //row = 0 is the bottom row
    for (int row = 1; row <= baseLength; row++)
{
    currentX = startX;

    System.out.println("row = " + row);

    for (int col = 0; col <= baseLength - row; col++)
{

    if (col % 2 == 0)
    g.setColor(Color.red);
    else
    g.setColor(Color.blue);

    System.out.println("col = " + col);
    g.fillRoundRect(currentX, currentY, legoWidth, legoHeight, arcWidth, arcHeight);
    currentX = currentX + legoWidth;
}
currentY -= legoHeight;
startX += legoWidth /2;
}
}
// The main method
public static void main(String[] args) {
    Legos2 app = new Legos2();
    // Set the size and the visibility
    app.setSize(550, 325);
    app.setVisible(true);
    // Exit on close is clicked
    app.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

}
}





console.log()