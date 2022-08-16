from django.contrib.auth import get_user_model
from celery import shared_task
from django.core.mail import send_mail
from blog22 import settings

'''Task to sent mail.'''


@shared_task
def sent_mail2(msg,email):
    send_mail(
            subject = "Alert  mail",
            message=msg,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[email],
            fail_silently=False,
        )
    return "Completed"
