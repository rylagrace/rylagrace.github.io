import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.html',
})
export class BlogComponent {
  articles = [
    {
      title: 'The Benefits of Regular Exercise',
      image: 'https://via.placeholder.com/350x250',
      description: 'Exercise has numerous physical and mental benefits. It can improve heart health, boost mood, and increase longevity.',
      author: 'John Doe',
      publish_date: 'January 1, 2022'
    },
    {
      title: 'The Importance of a Healthy Diet',
      image: 'https://via.placeholder.com/350x250',
      description: 'Eating a healthy, balanced diet is essential for maintaining physical and mental well-being. It can reduce the risk of chronic diseases and improve overall health.',
      author: 'Jane Doe',
      publish_date: 'February 1, 2022'
    },
    {
      title: 'Stress Management Techniques',
      image: 'https://via.placeholder.com/350x250',
      description: 'Stress can have negative effects on both physical and mental health. There are many techniques for managing stress, including exercise, mindfulness, and time management.',
      author: 'John Doe',
      publish_date: 'March 1, 2022'
    },
  ];

  openArticle(title: string, description: string, author: string, publish_date: string) {
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}`);
    console.log(`Author: ${author}`);
    console.log(`Publish Date: ${publish_date}`);
    // You can add code here to navigate to a different page or show a modal with the full article data
  }
}
