PAGES_SRC_DIR := ./templates/pages
PAGES_SRC := $(wildcard ${PAGES_SRC_DIR}/*.html)

PAGES_OUT_DIR := ./docs
PAGES_OUT := $(subst ${PAGES_SRC_DIR}, ${PAGES_OUT_DIR}, ${PAGES_SRC})

ASSETS := docs/assets

.PHONY all:
all: $(PAGES_OUT) $(ASSETS)

$(PAGES_OUT_DIR)/%.html: $(PAGES_SRC_DIR)/%.html
	m4 --define=CONTENT=$< templates/layout.m4 -I .  > $@

$(ASSETS):
	cp -r assets docs/assets

.PHONY clean:
	rm -r docs/*