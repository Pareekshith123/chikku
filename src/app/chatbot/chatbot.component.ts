import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';

interface Message {
  type: string;
  question: string;
}
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  isOpen = false;
  loading = false;
  messages: Message[] = [];
  chatForm = new FormGroup({
    question: new FormControl('', [Validators.required]),
  });
  @ViewChild('scrollMe') private myScrollContainer: any;

  constructor(private adminServiceService: AdminServiceService) {
    this.messages.push({
      type: 'client',
      question: 'Hi, I am your support agent. How can I help you?',
    });
  }

  openSupportPopup() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const sentMessage = this.chatForm.value.question;

    if (!sentMessage) {
      // Handle the case where the sentMessage is null or undefined
      return;
    }

    this.loading = true;
    this.messages.push({
      type: 'user',
      question: sentMessage,
    });
    this.chatForm.reset();
    this.scrollToBottom();

    this.adminServiceService.chat(sentMessage).subscribe(
      (response: any) => {
        this.loading = false;
        this.messages.push({
          type: 'client',
          question: response.response, // Update to use 'response' property
        });
        this.scrollToBottom();
      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.myScrollContainer.nativeElement.scrollTop =
          this.myScrollContainer.nativeElement.scrollHeight + 500;
      } catch (err) {
        console.error(err);
      }
    }, 150);
  }
}
