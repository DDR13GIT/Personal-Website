import assert from "node:assert/strict";
import { test } from "node:test";
import { getProjectsByCategory } from "../src/lib/projects.ts";

test("groups projects into ideas and academic categories in that order", () => {
  const groups = getProjectsByCategory();

  assert.equal(groups.length, 2);
  assert.equal(groups[0].category, "ideas");
  assert.equal(groups[0].label, "Ideas I Have Tinkered With");
  assert.equal(groups[1].category, "academic");
  assert.equal(groups[1].label, "Academic Projects");
});

test("every project has the fields a card needs to render", () => {
  const groups = getProjectsByCategory();
  const allProjects = groups.flatMap((g) => g.projects);

  assert.ok(allProjects.length > 0);

  for (const project of allProjects) {
    assert.ok(project.slug, `missing slug on ${project.title}`);
    assert.ok(project.title, `missing title on ${project.slug}`);
    assert.ok(project.icon, `missing icon on ${project.slug}`);
    assert.ok(project.story.length > 0, `missing story on ${project.slug}`);
    assert.ok(project.stack.length > 0, `missing stack on ${project.slug}`);
    assert.match(
      project.githubUrl,
      /^https:\/\/github\.com\/DDR13GIT\//,
      `githubUrl should point at a DDR13GIT repo for ${project.slug}`
    );
    assert.match(project.year, /^\d{4}$/, `year should be 4 digits for ${project.slug}`);
  }
});

test("slugs are unique", () => {
  const groups = getProjectsByCategory();
  const slugs = groups.flatMap((g) => g.projects.map((p) => p.slug));
  assert.equal(new Set(slugs).size, slugs.length);
});
