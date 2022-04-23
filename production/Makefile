#!/usr/bin/env bash
root_project = ..
#todo check for all paths that require build folder!
build = "$(root_project)/production/build"
release = "$(root_project)/production/release"

BG =\n\033[0;36m-- # Beginning
NC =\033[0m\n# No Color

version := $(shell git describe --tags --match="v*")

.PHONY: all
all: clean app
.PHONY: clean
clean:
	@(printf "${BG}Cleaning project${NC}")
		rm -rf $(build)
		rm -rf $(release)

.PHONY: list
list:
	@(printf "${BG}Check all the files${NC}")
		cd $(root_project) && ls -l

.PHONY: npm
npm:
	@(printf "${BG}Installing NPM dependencies${NC}")
		cd $(root_project) && npm install

.PHONY: build
build:
	@(printf "${BG}Build${NC}")
		cd $(root_project) && npm run build

.PHONY: app
app: list npm build
	@(printf "${BG}Preparing build directory${NC}")
		mkdir -p $(release)

	@(printf "${BG}Generating version file${NC}")
		echo "VERSION=$(version)" >$(build)/version.txt
		echo "BUILD_DATE=$(shell date --utc +%FT%TZ)" >>$(build)/version.txt

	@(printf "${BG}Running Gulp tasks${NC}")
		cd $(root_project) && export FORCE_COLOR=1 && node_modules/.bin/gulp production --appVersion=$(version)

.PHONY: package
package: app
	@(printf "${BG}Create package${NC}")
		cd $(root_project) && node_modules/.bin/gulp package --appVersion=$(version)

	@(printf "${BG}Package version $(version) is ready${NC}")
		echo $(version) >$(release)/latest.version