# Generated by Django 3.2.4 on 2021-06-26 17:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_compra_direccionenvio_productocompra'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='compra',
            name='transaccion',
        ),
    ]
