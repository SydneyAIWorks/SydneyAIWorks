# Keeping the map current

Work from the `datacentre-watch/` folder. Manual, weekly, about 20 minutes. Automate later once the pattern is stable.

1. Search news for the last 7 days: "data centre" plus each state name, "Stop the Slop", "data centre moratorium", "data centre petition", and each project name in the data file.
2. Check the NSW Planning Portal and Victorian DTP for status changes on the SSD / DFP applications listed in entries.
3. For each change, edit the entry, add the source, set `updated`, and adjust `status` and `confidence`.
4. Run `node scripts/validate-data.js`.
5. Bump `LAST_UPDATED`.
6. Commit and publish.

Automation idea (later): an n8n or GitHub Actions job that does step 1, sends results plus the current data file to Claude with the instruction "propose changes as a diff, do not apply", and emails the diff for approval. Keep the human approval step.
