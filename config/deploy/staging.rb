set :stage, :staging
server '192.168.50.38', user: 'vagrant', roles: %w{web app db}, primary: true
