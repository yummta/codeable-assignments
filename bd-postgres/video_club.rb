require "faker"

Faker::Config.locale = 'es'

categoria = ["Drama", "Comedia", "Accion", "Suspenso", "Terror", "Western", "Ciencia Ficcion"]
formato = ["DVD", "Blu-ray", "VHS", "CD"]

sql = ""

500.times do
  #sql += "INSERT INTO actor (nombre, nombre_real, fecha_nac) VALUES ('#{Faker::Name.name}', '#{Faker::Name.name}', '#{Faker::Date.backward(36500)}'); "
  #sql += "INSERT INTO miembros (nombre, telefono, direccion) VALUES ('#{Faker::Name.name}', '#{Faker::PhoneNumber.cell_phone}', '#{Faker::Address.full_address}'); "
  #sql += "INSERT INTO pelicula (titulo, categoria) VALUES ('#{Faker::Music.album}', '#{categoria.sample}'); "
  #sql += "INSERT INTO reparto (id_pelicula, id_actor) VALUES ('#{x+1}', '#{rand(15..531)}'); "
  #sql += "INSERT INTO casete (id_pelicula, formato) VALUES ('#{rand(1..133)}', '#{formato.sample}'); "
  sql += "INSERT INTO alquiler (id_casete, id_miembro, fecha_alquiler, fecha_devolucion) VALUES ('#{rand(1..3010)}', '#{rand(1..457)}', '#{Faker::Date.backward(365)}', 'Diego'); "
end

File.write("add.sql", sql)
