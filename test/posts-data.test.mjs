import assert from "node:assert/strict";
import { test } from "node:test";
import { getAllPosts, getAllTags, getRecentPosts } from "../src/lib/posts.ts";

test("derives blog filters from MDX post tags", () => {
  assert.deepEqual(getAllTags(), ["ALL", "POSTGRESQL"]);
});

test("returns the latest written posts from MDX content", () => {
  const recentPosts = getRecentPosts(3);
  const allPosts = getAllPosts();

  assert.equal(recentPosts.length, 1);
  assert.deepEqual(recentPosts, allPosts.slice(0, 3));
  assert.equal(recentPosts[0]?.slug, "json-vs-jsonb");
});
