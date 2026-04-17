impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let unique_set: HashSet<_> = nums.iter().collect(); 
        unique_set.len() != nums.len()
    }
}
