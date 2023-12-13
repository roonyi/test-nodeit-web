// All media is preloaded, access path is updated for production build
const modules = import.meta.glob(
	['/src/assets/*.svg', '/src/assets/images/*.svg', '/src/assets/images/*.png', '/src/assets/images/*.jpg'],
	{eager: true});

/**
 * Returns updated hashed path for media requested
 *
 * @param path {String} Original media location (internal absolute path)
 * @return {String} Updated hashed path (during vite build process)
 */
export const getMedia = (path) => {
    return modules[path].default;
}