from django.contrib import admin
from .models import ChattingRoom, Message
# from django_summernote.admin import SummernoteModelAmdin
from django_summernote.admin import SummernoteModelAdmin

@admin.register(Message)
class MessageAdmin(SummernoteModelAdmin):
    summernote_fields = ('text',)

    list_display = (
        "text",
        "user",
        "room",
        "created_at",
    )
    list_filter = (
        "created_at",
    )


@admin.register(ChattingRoom)
class ChattingRoomAdmin(admin.ModelAdmin):
    list_display = (
        "__str__",
        "created_at",
        "updated_at",
    )


# @admin.register(Message)
# class MessageAdmin(admin.ModelAdmin):
#     list_display = (
#         "text",
#         "user",
#         "room",
#         "created_at",
#     )
#     list_filter = (
#         "created_at",
#     )


