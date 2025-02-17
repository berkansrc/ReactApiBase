import { useEffect, useState } from "react"
import { PostParam } from "../types/post"
import { fetchUserPost } from "../services/api"
import { Button, Modal } from "react-bootstrap"
interface PostProps {
    userId: number | null | any,
    onClose: () => void
}
function PostList({ userId, onClose }: PostProps) {
    const [posts, setPost] = useState<PostParam[]>([])
    useEffect(() => {
        fetchUserPost(userId).then((data) => {
            setPost(data)
        }).catch(() => {
            console.log("Hata");
        })
    }, [userId])
    return (
        <div className="opened">
        <Modal show={userId !== null} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {
                    posts.map((post) => (
                        <div  key={post.id}>
                            <h1>{post.title}</h1>
                            <article>{post.body}</article>
                        </div>
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Kapat</Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default PostList