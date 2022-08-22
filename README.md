# dock
# dockerd

## to run this conatainers
also add .env.dev  file with postgress creds , smptp cred for gmail
	docker-compose build
	docker-compose up


## .env.dev model
	# django app
	DB_HOST=db
	DB_NAME=app
	DB_USER=postgres
	DB_PASS=password

	# postgres
	POSTGRES_DB=app
	POSTGRES_USER=postgres
	POSTGRES_PASSWORD=password

	#smtp 
	smtp_password = put ur gmail app password
