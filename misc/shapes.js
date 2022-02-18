//test 3, 3-d shapes

// Java program to create sphere by passing the radius
// as arguments in constructor

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.shape.DrawMode;
import javafx.scene.layout.*;
import javafx.event.ActionEvent;
import javafx.scene.shape.Sphere;
import javafx.scene.control.*;
import javafx.stage.Stage;
import javafx.scene.Group;
public class sphere_0 extends Application {

    // launch the application
    public void start(Stage stage)
{
    // set title for the stage
    stage.setTitle("creating sphere");

    // create a sphere
    Sphere sphere = new Sphere(80.0f);

    // create a Group
    Group group = new Group(sphere);

    // translate the sphere to a position
    sphere.setTranslateX(100);
    sphere.setTranslateY(100);

    // create a scene
    Scene scene = new Scene(group, 500, 300);

    // set the scene
    stage.setScene(scene);

    stage.show();
}

public static void main(String args[])
{
    // launch the application
    launch(args);
}
}
