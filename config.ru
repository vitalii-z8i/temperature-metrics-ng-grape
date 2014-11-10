#!/usr/bin/env rackup
# encoding: utf-8

# This file can be used to start Padrino,
# just execute it from the command line.
require 'rack/contrib/try_static'
require File.expand_path("../boot/boot.rb", __FILE__)

use Rack::TryStatic,
  root: File.expand_path('../frontend/app', __FILE__),
  urls: %w[/], try: ['index.html']

run Rack::URLMap.new  "/api"=> API::Listing
