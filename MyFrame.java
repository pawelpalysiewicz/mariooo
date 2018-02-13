package marios;

import java.awt.FlowLayout;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class MyFrame extends JFrame{


public MyFrame(){
	super("Hello Worldzie");
	JPanel panel = new MyPanel();
	add(panel);

	pack();
	setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	setSize(300, 100);
	setLocation(50,50);
	setLayout(new FlowLayout());
	
	add(new JButton("Przycisk 1"));
	add(new JButton("Przycisk 2"));
	add(new JButton("Przycisk 3"));
	
    setVisible(true);
}
}
